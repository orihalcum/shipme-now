import { useState } from "react";
import { IMG_COMPETITIVE_PRICE, IMG_SAFETY_PROTECTION, IMG_SHIPPING_CONSULTATION, METADATA } from "../config";
import SectionCta from "@/containers/organisms/cta";
import ServiceSection from "@/containers/organisms/services";
import HeroLanding from "@/containers/templates/hero-landing";
import HowToOrder from "@/containers/templates/how-to-order";
import MainLayout from "@/containers/templates/layouts";

const serviceSections = [
  {
    title: "Perlindungan Keamanan",
    description: "Kami menjamin perlindungan barang / barang Anda. mudah untuk melacak dan menemukan kiriman Anda.",
    image: IMG_SAFETY_PROTECTION,
    formType: "ImageLeft",
  },
  {
    title: "Harga Bersaing",
    description: "Kami memberikan tarif pengiriman terbaik yang tersedia dengan layanan penjemputan gratis",
    image: IMG_COMPETITIVE_PRICE,
    formType: "ImageRight"
  },
  {
    title: "Konsultasi Pengiriman",
    description: "Bicarakanlah dengan kami tentang kebutuhan pengiriman Anda. Kami dapat membantu Anda memberi saran tentang peraturan regulasi ekspor & impor",
    image: IMG_SHIPPING_CONSULTATION,
    formType: "ImageLeft"
  }
]

export default function Home() {

  const [layoutProps] = useState({
    transparentHeader: true,
    metadata: METADATA
  })

  return (
    <MainLayout {...layoutProps}>
      <HeroLanding />
      <SectionCta id="kenapa-shipme">
        <div className="pt-lg-90 pt-md-90 pb-lg-30 pb-md-30">
          Kenapa<br />
          <span className="color-primary">SHIPME.NOW</span>
        </div>
      </SectionCta>
      {
        serviceSections.map(({ title, description, image, formType }, k) => (
          <ServiceSection
            title={title}
            description={description}
            image={image}
            formType={formType}
            key={k}
          />
        ))
      }
      <HowToOrder />
    </MainLayout>
  )
}
