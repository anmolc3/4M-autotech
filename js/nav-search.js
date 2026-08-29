/**
 * 4M AUTOTECH — Universal Navbar Search
 * Real-time live search across products and services for Desktop and Mobile navbar.
 */

(function () {
    'use strict';

    function initNavbarSearch() {
        const desktopInput = document.getElementById('nav-search-input');
        const desktopWrapper = document.getElementById('nav-search-wrapper');
        const desktopDropdown = document.getElementById('nav-search-dropdown');
        const desktopResults = document.getElementById('nav-search-results');
        const desktopClear = document.getElementById('nav-search-clear');

        const mobileInput = document.getElementById('nav-mobile-search-input');
        const mobileDropdown = document.getElementById('nav-mobile-search-dropdown');
        const mobileResults = document.getElementById('nav-mobile-search-results');
        const mobileClear = document.getElementById('nav-mobile-search-clear');

        let activeIndex = -1;
        let currentItems = [];

        // Global hotkey: "/" or "Ctrl+K" / "Cmd+K" to focus search
        document.addEventListener('keydown', (e) => {
            if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) &&
                document.activeElement.tagName !== 'INPUT' &&
                document.activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                if (desktopInput && window.innerWidth >= 992) {
                    desktopInput.focus();
                    desktopInput.select();
                } else if (mobileInput) {
                    const mobileNav = document.getElementById('mobile-nav');
                    if (mobileNav && !mobileNav.classList.contains('active')) {
                        const hamburger = document.getElementById('hamburger');
                        if (hamburger) hamburger.click();
                    }
                    setTimeout(() => mobileInput.focus(), 150);
                }
            }
        });

        function performSearch(query) {
            const q = (query || '').trim().toLowerCase();
            if (!q) return { products: [], services: [] };

            const matchedProducts = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).filter(p => {
                const name = (p.name || '').toLowerCase();
                const sub = (p.subtitle || '').toLowerCase();
                const desc = (p.description || '').toLowerCase();
                const cat = (p.categoryLabel || '').toLowerCase();
                const categories = Array.isArray(p.category) ? p.category.join(' ').toLowerCase() : '';
                return name.includes(q) || sub.includes(q) || desc.includes(q) || cat.includes(q) || categories.includes(q);
            }).slice(0, 5);

            const matchedServices = (typeof SERVICES !== 'undefined' ? SERVICES : []).filter(s => {
                const title = (s.title || s.name || '').toLowerCase();
                const shortDesc = (s.shortDesc || s.desc || '').toLowerCase();
                const cat = (s.category || '').toLowerCase();
                return title.includes(q) || shortDesc.includes(q) || cat.includes(q);
            }).slice(0, 3);

            return { products: matchedProducts, services: matchedServices, query: q };
        }

        function highlightMatch(text, query) {
            if (!query || !text) return text;
            const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return text.replace(regex, '<mark class="nav-search-highlight">$1</mark>');
        }

        function renderResultsHtml(results, query) {
            const { products, services } = results;
            if (products.length === 0 && services.length === 0) {
                return `
                    <div class="nav-search-empty">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <p>No matches found for "<strong>${escapeHtml(query)}</strong>"</p>
                        <span>Try searching for 'polish', 'additive', 'coating', 'foam wash', or 'bike'</span>
                    </div>
                `;
            }

            let html = '';
            currentItems = [];

            if (products.length > 0) {
                html += `<div class="nav-search-section-title">Products (${products.length})</div>`;
                products.forEach(p => {
                    const itemUrl = `products.html?product=${encodeURIComponent(p.id)}`;
                    currentItems.push({ type: 'product', url: itemUrl, data: p });
                    const isBike = p.id.startsWith('bike-') || (p.category && p.category.includes('bike-care'));
                    const badge = isBike ? 'Bike Care' : 'Car Care';
                    const priceHtml = p.mrp ? `<span class="nav-search-item-price">${escapeHtml(p.mrp)}</span>` : (p.size ? `<span class="nav-search-item-size">${escapeHtml(p.size)}</span>` : '');

                    html += `
                        <a href="${itemUrl}" class="nav-search-item" data-index="${currentItems.length - 1}">
                            <div class="nav-search-item-icon" style="background:${p.accentLight || 'rgba(215,25,32,0.1)'}; color:${p.accentColor || '#D71920'}">
                                ${isBike ? 
                                    '<svg viewBox="0 0 337 337" width="16" height="16" fill="currentColor"><path d="M90.114,233.755c2.132-4.493,5.907-14.506,4.96-22.42c-1.039-1.256-4.835-5.27-16.85-14.539c1.719,3.971,2.681,8.349,2.681,12.95c0,18.025-14.609,32.634-32.634,32.634s-32.634-14.609-32.634-32.634s14.609-32.634,32.634-32.634c1.452,0,2.872,0.125,4.27,0.31c-6.505-5.189-11.857-9.964-15.964-14.462C15.583,168.192,0,187.126,0,209.747c0,26.657,21.609,48.272,48.272,48.272C66.183,258.018,81.782,248.239,90.114,233.755z M286.236,155.356c-16.975,0-31.971,8.327-41.239,21.087c7.968,0.538,17.035,1.115,25.738,1.648c4.601-2.529,9.883-3.976,15.501-3.976c17.797,0,32.226,14.43,32.226,32.226s-14.43,32.226-32.226,32.226c-9.883,0-18.71-4.46-24.623-11.46c-7.49-2.219-16.361-4.64-24.236-6.239c6.26,21.076,25.754,36.463,48.859,36.463c28.163,0,50.991-22.828,50.991-50.991S314.394,155.356,286.236,155.356z"/></svg>' : 
                                    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>'
                                }
                            </div>
                            <div class="nav-search-item-body">
                                <div class="nav-search-item-top">
                                    <span class="nav-search-item-title">${highlightMatch(p.name, query)}</span>
                                    <span class="nav-search-item-badge">${badge}</span>
                                </div>
                                <div class="nav-search-item-desc">${highlightMatch(p.subtitle || p.categoryLabel || '', query)}</div>
                            </div>
                            ${priceHtml}
                        </a>
                    `;
                });
            }

            if (services.length > 0) {
                html += `<div class="nav-search-section-title" style="margin-top:10px;">Services (${services.length})</div>`;
                services.forEach(s => {
                    const itemUrl = `home-service.html#services`;
                    currentItems.push({ type: 'service', url: itemUrl, data: s });

                    html += `
                        <a href="${itemUrl}" class="nav-search-item" data-index="${currentItems.length - 1}">
                            <div class="nav-search-item-icon" style="background:rgba(27,79,140,0.12); color:#1B4F8C">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                    <polyline points="2 17 12 22 22 17"></polyline>
                                    <polyline points="2 12 12 17 22 12"></polyline>
                                </svg>
                            </div>
                            <div class="nav-search-item-body">
                                <div class="nav-search-item-top">
                                    <span class="nav-search-item-title">${highlightMatch(s.title || s.name || '', query)}</span>
                                    <span class="nav-search-item-badge" style="background:rgba(27,79,140,0.1);color:#1B4F8C">Doorstep</span>
                                </div>
                                <div class="nav-search-item-desc">${highlightMatch(s.shortDesc || s.desc || '', query)}</div>
                            </div>
                            <span class="nav-search-item-link-arrow">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </a>
                    `;
                });
            }

            html += `
                <div class="nav-search-footer">
                    <a href="products.html?search=${encodeURIComponent(query)}" class="nav-search-view-all">
                        <span>Search all products for "<strong>${escapeHtml(query)}</strong>"</span>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            `;

            return html;
        }

        function escapeHtml(str) {
            return String(str || '').replace(/[&<>"']/g, function (m) {
                return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
            });
        }

        function updateSelection(container) {
            if (!container) return;
            const items = container.querySelectorAll('.nav-search-item');
            items.forEach((el, idx) => {
                if (idx === activeIndex) {
                    el.classList.add('is-active');
                    el.scrollIntoView({ block: 'nearest' });
                } else {
                    el.classList.remove('is-active');
                }
            });
        }

        // ================= DESKTOP SEARCH HANDLERS =================
        if (desktopInput && desktopDropdown && desktopResults) {
            desktopInput.addEventListener('input', (e) => {
                const val = e.target.value;
                if (desktopClear) desktopClear.style.display = val ? 'flex' : 'none';

                if (!val.trim()) {
                    desktopDropdown.style.display = 'none';
                    activeIndex = -1;
                    return;
                }

                const results = performSearch(val);
                desktopResults.innerHTML = renderResultsHtml(results, val.trim());
                desktopDropdown.style.display = 'block';
                activeIndex = -1;
            });

            desktopInput.addEventListener('focus', () => {
                if (desktopInput.value.trim()) {
                    const results = performSearch(desktopInput.value);
                    desktopResults.innerHTML = renderResultsHtml(results, desktopInput.value.trim());
                    desktopDropdown.style.display = 'block';
                }
            });

            desktopInput.addEventListener('keydown', (e) => {
                const items = desktopResults.querySelectorAll('.nav-search-item');
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (items.length > 0) {
                        activeIndex = (activeIndex + 1) % items.length;
                        updateSelection(desktopResults);
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (items.length > 0) {
                        activeIndex = (activeIndex - 1 + items.length) % items.length;
                        updateSelection(desktopResults);
                    }
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (activeIndex >= 0 && currentItems[activeIndex]) {
                        window.location.href = currentItems[activeIndex].url;
                    } else if (desktopInput.value.trim()) {
                        window.location.href = `products.html?search=${encodeURIComponent(desktopInput.value.trim())}`;
                    }
                } else if (e.key === 'Escape') {
                    desktopDropdown.style.display = 'none';
                    desktopInput.blur();
                }
            });

            if (desktopClear) {
                desktopClear.addEventListener('click', () => {
                    desktopInput.value = '';
                    desktopClear.style.display = 'none';
                    desktopDropdown.style.display = 'none';
                    desktopInput.focus();
                });
            }

            document.addEventListener('click', (e) => {
                if (desktopWrapper && !desktopWrapper.contains(e.target)) {
                    desktopDropdown.style.display = 'none';
                }
            });
        }

        // ================= MOBILE SEARCH HANDLERS =================
        if (mobileInput && mobileDropdown && mobileResults) {
            mobileInput.addEventListener('input', (e) => {
                const val = e.target.value;
                if (mobileClear) mobileClear.style.display = val ? 'flex' : 'none';

                if (!val.trim()) {
                    mobileDropdown.style.display = 'none';
                    return;
                }

                const results = performSearch(val);
                mobileResults.innerHTML = renderResultsHtml(results, val.trim());
                mobileDropdown.style.display = 'block';
            });

            mobileInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && mobileInput.value.trim()) {
                    e.preventDefault();
                    window.location.href = `products.html?search=${encodeURIComponent(mobileInput.value.trim())}`;
                }
            });

            if (mobileClear) {
                mobileClear.addEventListener('click', () => {
                    mobileInput.value = '';
                    mobileClear.style.display = 'none';
                    mobileDropdown.style.display = 'none';
                    mobileInput.focus();
                });
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarSearch);
    } else {
        initNavbarSearch();
    }
})();
