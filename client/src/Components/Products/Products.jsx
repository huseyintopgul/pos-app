

const Products = () => {
    return (
        <div className="product-wrapper grid gap-4 grid-cols-card">
            {/* - css ile bu girid modelini bu alana uygulayabiliriz.
                    style={{gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr)"}}
                - aynı durumu Tailwind ile sağlamak için "tailwind.config.js - extend:{}" içerisine configrasyon yazmalıyız.
                    extend: { gridTamplateColomns: {
                                "card":"repeat(auto-fill, minmax(150px, 1fr))"
                    }},
                - gridTamplateColomns içerisine "card" olarak gerekli değerleri tanımladıktan sonra bunu component alanında kullanabiliriz.
            */}
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                    {/* product-img için width-full özelliğini tanımlasak bile kapsayıcı wrapper için grid yapısını kullanacağımızdan dolayı,
                         burada tanımlı w-full kendisi için belirtilen alanı dolduracaktır. */}
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Ruj</span>
                    <span className="product-price font-bold">99₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Ejder Meyvesi</span>
                    <span className="product-price font-bold">289₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Nar</span>
                    <span className="product-price font-bold">35₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Ruj</span>
                    <span className="product-price font-bold">99₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Ejder Meyvesi</span>
                    <span className="product-price font-bold">289₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Nar</span>
                    <span className="product-price font-bold">35₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Fujifilm</span>
                    <span className="product-price font-bold">5.000₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">ÇİLEK</span>
                    <span className="product-price font-bold">50₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
            <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none">
                <div className="product-img">
                    <img src="https://images.pexels.com/photos/6439510/pexels-photo-6439510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="product-img"
                        className="h-28 object-cover w-full border-b" />
                </div>
                <div className="product-info flex flex-col text-center">
                    <span className="prodoct-name font-bold">Siyah Üzüm</span>
                    <span className="product-price font-bold">30₺</span>
                </div>
            </div>
        </div>
    )
}

export default Products
