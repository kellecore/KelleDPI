<div align="center">
  <img src="yenilogo.png" width="112" alt="KelleDPI Logo">

# KelleDPI

Windows için modern, açık kaynak DPI bypass aracı.

[![Download](https://img.shields.io/badge/Download-KelleDPI-107C10?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/kellecore/KelleDPI/releases)
[![Version](https://img.shields.io/badge/Version-1.0.2-0078D4?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kellecore/KelleDPI/releases)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge)](LICENSE)

</div>

---

## Proje hakkında

KelleDPI, Windows üzerinde yerel proxy ve DPI bypass tekniklerini kullanarak erişim sorunlarını azaltmayı hedefleyen Tauri tabanlı masaüstü uygulamasıdır. React arayüzü, Rust tabanlı sistem işlemleri ve SpoofDPI motoru ile tek pencereden yönetilebilir.

Bu proje, [BypaxDPI/BypaxDPI-Windows](https://github.com/BypaxDPI/BypaxDPI-Windows) projesinden fork/klon temel alınarak geliştirilmiştir. KelleDPI tarafında arayüz, Windows entegrasyonu, otomasyon, güvenli kapanış ve kullanıcı deneyimi iyileştirmeleri eklenmiştir.

## Öne çıkanlar

- Modern Windows arayüzü: Tauri v2 + React tabanlı hafif masaüstü deneyimi.
- Otomatik yönetici başlatma: Gerekli yetki yoksa uygulama UAC ile kendini yeniden başlatır.
- Akıllı proxy yönetimi: Bağlantı kapanırken sistem proxy ayarlarını temizler.
- PAC desteği: Yerel ağdaki diğer cihazlar için otomatik proxy yapılandırması sunar.
- ISP profilleri: Farklı servis sağlayıcılar için hazır bağlantı önerileri içerir.
- DNS gecikme ölçümü: Desteklenen DNS sunucularını UDP sorgu ile ölçer.
- Kurtarma araçları: Proxy takılı kalırsa internet bağlantısını onarmaya yardımcı olur.

## Ekran görüntüleri

<p align="center">
  <img src="images/1.jpg" alt="KelleDPI ana ekran" width="35%">
  <img src="images/2.jpg" alt="KelleDPI ayarlar ekranı" width="35%">
</p>

## Kurulum

1. [Releases](https://github.com/kellecore/KelleDPI/releases) sayfasını açın.
2. En güncel `KelleDPI` Windows kurulum dosyasını indirin.
3. Kurulumu tamamlayın.
4. Uygulamayı başlatın. Yönetici izni gerekirse KelleDPI UAC penceresiyle kendini yeniden başlatır.

## Kullanım

1. Uygulamayı açın.
2. Gerekirse internet servis sağlayıcınızı seçin.
3. `Bağlan` butonuna basın.
4. İşiniz bittiğinde `Bağlantıyı Kes` veya `Çıkış` kullanın.

Diğer cihazlarda kullanmak için uygulamadaki `Diğer Cihazları Bağla` bölümünden PAC adresini veya manuel proxy bilgilerini alın.

## Güvenlik ve gizlilik

KelleDPI uzak VPN servisi değildir. Trafiğinizi üçüncü taraf sunucuya taşımaz, şifre çözmez ve içerik toplamaz. İşlem yerel makinenizde çalışan proxy ve paket parçalama teknikleriyle yapılır.

Uygulama telemetri veya kullanıcı izleme sistemi içermez. Antivirüs yazılımları, yerel proxy ve paket işleme davranışları nedeniyle bazı bileşenleri yanlış pozitif olarak işaretleyebilir.

## Kaynak proje

KelleDPI geliştirmesi, BypaxDPI Windows projesinin açık kaynak çalışması temel alınarak yapılmıştır:

- Kaynak proje: [BypaxDPI/BypaxDPI-Windows](https://github.com/BypaxDPI/BypaxDPI-Windows)
- KelleDPI releases: [github.com/kellecore/KelleDPI/releases](https://github.com/kellecore/KelleDPI/releases)

## Geliştirme

```bash
npm install
npm test
npm run build
npm run tauri build
```

Proxy motorunu yeniden derlemek için:

```bash
npm run build-proxy
```

## Lisans

Bu proje MIT lisansı ile yayınlanır. Ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
