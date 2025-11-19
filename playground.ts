



function initRecentlyViewedProducts_691d0518e6607(options) {

    const defaultOptions = {
        useGraphQL: false,
        noOfProductsToShow: 5        };
    const config = Object.assign({}, defaultOptions, options || {});

    function readRecentlyViewedFromStorage () {
        const data = hyva.getBrowserStorage().getItem('recently_viewed_products');
        return data ? JSON.parse(data).filter(product => {
                            return config.useGraphQL || product.id;
        }) : [];
    }

    function writeRecentlyViewedToStorage(data) {
        hyva.getBrowserStorage().setItem('recently_viewed_products', JSON.stringify(data));
    }

    return {
        products: [],
        currency: [],
        noOfProductsToShow: config.noOfProductsToShow,
        loading: true,
        initRecentlyViewedProducts() {
            this.loading = true;
            const recentlyViewedProductsArray = readRecentlyViewedFromStorage();

            if (recentlyViewedProductsArray.length > 0) {
                let itemsToShow = [];

                // Avoid showing the current product
                const start = '' === '' ? 0 : 1;
                itemsToShow = recentlyViewedProductsArray.slice(start)

                const currentCurrency = 'USD';

                if (itemsToShow.length > 0 && itemsToShow[0].price_range.minimum_price.final_price.currency !== currentCurrency) {
                    this.products = [];
                    this.fetchProducts(itemsToShow);
                } else {
                    this.renderRecentlyViewedProducts(itemsToShow);
                }
            } else {
                this.loading = false;
            }
        },
        getProducts() {
            const recentlyViewedProductsArray = readRecentlyViewedFromStorage();
            let itemsToShow = [];
            if (recentlyViewedProductsArray.length > 0) {
                // Avoid showing the current product
                const start = '' === '' ? 0 : 1;
                itemsToShow = recentlyViewedProductsArray.slice(start)
            }

            itemsToShow = itemsToShow.slice(0, this.noOfProductsToShow);

            if (!itemsToShow.length) {
                this.noOfProductsToShow = 0;
                this.loading = false;
                return;
            }

            config.useGraphQL
                ? this.fetchProducts(itemsToShow)
                : this.renderRecentlyViewedProducts(itemsToShow)
        },

        fetchProducts(itemsToShow) {
            const skusToFetch = itemsToShow.map(product => product.sku);
                                            const query = `query ($skus: [String!]!) {
products(filter: { sku: { in: $skus } }) {
items {
    sku
    id
    name
    small_image {
    label
    url
    }
    url_key
    url_suffix
    visibility
    status
    price_html
    price_range {
    minimum_price {
        regular_price {
        value
        currency
        }
        final_price {
        value
        currency
        }
    }
    }
}
}
}`;
            const variables = JSON.stringify({skus: skusToFetch});
            window.fetch(BASE_URL + 'graphql?' + new URLSearchParams({query, variables}), {
                method: 'GET',
                headers: {
                    'Store': 'default',
                    'Content-Currency': 'USD'
                },
            })
                .then((response) =>  response.json())
                .then((result) => {
                        this.currency = (result &&
                            result.data &&
                            result.data.currency);

                        const responseProducts = (
                            result &&
                            result.data &&
                            result.data.products &&
                            result.data.products.items
                        ) || [];

                        // fix sorting of the response-products according to the sorting of the requested-products
                        const sortedProducts = [];
                        itemsToShow.forEach(product => {
                            responseProducts.forEach(productData => {
                                if (product.sku === productData.sku) {
                                    productData.expiry = product.expiry;
                                    sortedProducts.push(productData);
                                }
                            });
                        });
                        writeRecentlyViewedToStorage(sortedProducts);
                        this.renderRecentlyViewedProducts(sortedProducts);
                    }
                )
                .finally(() => this.loading = false)
        }, // end fetchProducts()

        renderRecentlyViewedProducts(products) {
            this.products = products;
            this.loading = false;
        },
    }
}




function initMiniSearchComponent() {
    'use strict';

    return {
        show: false,
        isLoading: false,
        formSelector: "#search_mini_form",
        url: "https://www.taydaelectronics.com/search/ajax/suggest/",
        destinationSelector: "#search_autocomplete",
        templates: {"term":{"title":"Search Terms","template":"Magebit_VentaSmileElasticSuite::core\/autocomplete\/term.phtml"},"product":{"title":"Products","template":"Magebit_VentaSmileElasticSuite::catalog\/autocomplete\/product.phtml"},"category":{"title":"Categories","template":"Magebit_VentaSmileElasticSuite::catalog\/autocomplete\/category.phtml"},"product_attribute":{"title":"Attributes","template":"Magebit_VentaSmileElasticSuite::catalog\/autocomplete\/product_attribute.phtml","titleRenderer":"renderEsAutocompleteTitleAttribute"},"cms_page":{"title":"Cms page","template":"Hyva_SmileElasticsuite::cms-search\/autocomplete\/cms.phtml"}},
        priceFormat: {"pattern":"$%s","precision":3,"requiredPrecision":3,"decimalSymbol":".","groupSymbol":",","groupLength":3,"integerRequired":false},
        minSearchLength: 1,
        searchResultsByType: {},
        currentRequest: null,
        searchQuery: 'a',
        showDropdown: false,
        isIOS: navigator.userAgent.includes('Mac'),
        isRecentlyViewedEnabled: false,
        popularSearchTerms: {},
        containerStyles: null,
                    init() {
            this.addContainerStyles(window.magebit.deviceType);
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && (this.show || this.showDropdown) && this.searchQuery === '') {
                    this.close();
                }
            });

            if (this.isIOS) {
                document.addEventListener("touchstart", e => {
                    if (
                        document.activeElement === this.$refs.searchInput &&
                        !this.$refs.searchInput.contains(e.target) &&
                        !e.target.closest("#elasticsuite-search-container")
                    ) {
                        this.$refs.searchInput.blur();
                    }
                }, { passive: true });

                let lastScrollY = window.scrollY;
                document.addEventListener("touchmove", e => {
                    if (document.activeElement === this.$refs.searchInput) {
                        const currentScrollY = window.scrollY;
                        if (Math.abs(currentScrollY - lastScrollY) > 5) {
                            this.$refs.searchInput.blur();
                        }
                        lastScrollY = currentScrollY;
                    }
                }, { passive: true });
            }
        },
        handleIOSBodyLock() {
            if (!this.isIOS) return;
            setTimeout(() => document.body.classList.add('ios-body-lock'), 100);
        },
        handleIOSBodyUnlock() {
            if (!this.isIOS) return;
            if (!this.show && !this.showDropdown) {
                document.body.classList.remove('ios-body-lock');
            }
        },
        addContainerStyles(deviceType) {
            if (deviceType < window.magebit.DEVICE_TYPE_DESKTOP) {
                const offset = this.$refs.searchInput.getBoundingClientRect().bottom;
                this.containerStyles = `height: calc(100vh - ${offset}px); height: calc(100dvh - ${offset}px);`;
            } else {
                const offset = this.$refs.searchInput.getBoundingClientRect().bottom + /* top gap */ 8 + /* bottom space */ 20;
                this.containerStyles = `max-height: calc(100vh - ${offset}px); max-height: calc(100dvh - ${offset}px);`;
            }
        },
        submitSearch() {
            const form = this.$root.querySelector(this.formSelector);
            const q = this.$refs.searchInput.value;

            let url = form.action + '?' + new URLSearchParams({
                q: q,
            }).toString();

            fetch(url, {
                method: 'GET',
            }).then((response) => {
                if (response.redirected) {
                    // Store redirect message in the cookie to dispatch in Product page
                    const message = hyva.str("\u00251\u0020is\u0020the\u0020only\u0020product\u0020matching\u0020your\u0020\u0027\u00252\u0027\u0020search.", '%1', this.$refs.searchInput.value);
                    document.cookie = `search_redirect_message=${message}; path=/; SameSite=Lax;`;
                }
                window.location.href = response.url;
            })
        },
        /**
         * Get search results.
         */
        getSearchResults() {
            let value = this.$refs.searchInput.value.trim();

            if (value.length < parseInt(this.minSearchLength, 10)) {
                this.searchResultsByType = [];
                
                return false;
            }

            this.isLoading = true;

            let url = this.url + '?' + new URLSearchParams({
                q: this.$refs.searchInput.value,
                _: Date.now()
            }).toString();

            if (this.currentRequest !== null) {
                this.currentRequest.abort();
            }
            this.currentRequest = new AbortController();

            fetch(url, {
                method: 'GET',
                signal: this.currentRequest.signal,
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then((data)  => {
                this.handleIOSBodyLock();
                window.hyva.bodyLock();
                this.show = value.length >= parseInt(this.minSearchLength, 10);
                this.showDropdown = !this.show;

                if (!this.showDropdown) {
                    this.products = {};
                    this.popularSearchTerms = {};
                }
                this.searchResultsByType = data.reduce((acc, result) => {
                    if (! acc[result.type]) acc[result.type] = [];
                    acc[result.type].push(result);
                    return acc;
                }, {});
                this.isLoading = false;
            }).catch((error) => {
                this.handleIOSBodyUnlock();
                window.hyva.bodyUnlock();
                this.isLoading = false;
                console.warn(error);
            });
        },
        close() {
            this.show = false;
            this.showDropdown = false;
            this.products = {};
            this.popularSearchTerms = {};

            if (this.isIOS) {
                const scrollY = document.body.style.top;
                document.body.style.cssText = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
            this.handleIOSBodyUnlock();
            window.hyva.bodyUnlock();
        },
        onInputClick() {
            if (this.searchQuery.length) {
                this.getSearchResults();
            }
                        },
        getDiscount(price_range) {
            return hyva.str('-%1%', Math.round((1 - (price_range.minimum_price.final_price.value / price_range.minimum_price.regular_price.value)) * 100));
        },
        clearSearchQuery() {
            this.searchQuery = '';
            this.$refs.searchInput.value = '';
        },
                }
}
















// npx tsx ./playground.ts