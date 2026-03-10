import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

const UIKit = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    En az 8 farklı component varyantı asagida sergilenmektedir.
                </p>
            </header>

            {/*--- BUTTONS ---*/}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white dark:border-gray-700">Buttons</h2>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 uppercase">Renk Varyantlari</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 uppercase">Boyut Varyantlari</h3>
                        <div className="flex flex-wrap items-end gap-3">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/*--- INPUTS ---*/}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white dark:border-gray-700">Inputs</h2>
                <div className="space-y-4">
                    <Input id="ui-normal" label="Normal Input" placeholder="Bir sey yazin..." />
                    <Input id="ui-error" label="Hatali Input" error="Bu alan zorunludur" value="Gecersiz veri" onChange={() => { }} />
                    <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
                    <Input id="ui-disabled" label="Disabled Input" disabled value="Duzenlenemez" />
                </div>
            </section>

            {/*--- CARDS ---*/}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white dark:border-gray-700">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        variant="elevated"
                        title="Elevated Card"
                        image="https://api.dicebear.com/7.x/shapes/svg?seed=elevated&backgroundColor=1e3a8a"
                    >
                        Golge ile yukseltilmis, klasik kart yapisi.
                    </Card>
                    <Card
                        variant="outlined"
                        title="Outlined Card"
                        image="https://api.dicebear.com/7.x/shapes/svg?seed=outlined&backgroundColor=2563eb"
                    >
                        Ince cerceveli, modern ve sade gorunum.
                    </Card>
                    <Card
                        variant="filled"
                        title="Filled Card"
                        footer={<Button size="sm">Detay</Button>}
                    >
                        Dolgulu arka plani olan, daha az vurgulu kart.
                    </Card>
                </div>
            </section>

            {/*--- ALERTS ---*/}
            <section className="space-y-4 max-w-2xl">
                <h2 className="text-2xl font-semibold border-b pb-2 dark:text-white dark:border-gray-700">Alerts</h2>
                <div className="space-y-3">
                    <Alert variant="info" title="Bilgi">Formunuz taslak olarak kaydedildi.</Alert>
                    <Alert variant="success" title="Basarili">Islem basariyla tamamlandi.</Alert>
                    <Alert variant="warning" title="Uyari">Oturumunuzun suresı dolmak uzere.</Alert>
                    <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Alert kapatildi')}>
                        Sunucu ile baglanti kurulamadi.
                    </Alert>
                </div>
            </section>
        </div>
    );
};

export default UIKit;
