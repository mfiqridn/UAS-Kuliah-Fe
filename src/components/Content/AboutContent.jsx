import React from "react";
import { AboutSection, CardContainer } from "./StyledAboutContent";
import Card from "./Card";

const newsData = [
  {
    title: "2020: Kasus Pertama di Depok",
    content:
      "COVID-19 pertama kali terdeteksi di Indonesia pada 2 Maret 2020. Dua warga Depok dinyatakan positif setelah kontak dengan WN Jepang. Pemerintah mulai memberlakukan PSBB di beberapa wilayah.",
  },
  {
    title: "2021: Puncak Gelombang Delta",
    content:
      "Indonesia mengalami lonjakan tajam akibat varian Delta pada pertengahan 2021. Rumah sakit penuh dan PPKM Darurat diberlakukan. Program vaksinasi dimulai sejak Januari.",
  },
  {
    title: "2022: Varian Omicron Menyebar",
    content:
      "Omicron menyebar cepat dengan gejala ringan. Pemerintah melonggarkan pembatasan. Sekolah dan perkantoran kembali dibuka dengan protokol longgar.",
  },
  {
    title: "2023: Pandemi Resmi Berakhir",
    content:
      "Presiden menyatakan status pandemi COVID-19 berakhir di Indonesia pada Juni 2023. Masyarakat kembali beraktivitas normal. Booster vaksin tetap dianjurkan.",
  },
  {
    title: "2024: Fokus Pemantauan & Imunisasi",
    content:
      "Vaksinasi booster terus digencarkan untuk kelompok rentan. Pemerintah fokus pada penguatan sistem deteksi dini dan pemantauan berkala.",
  },
  {
    title: "2025: Evaluasi & Kesiapsiagaan",
    content:
      "COVID-19 dipantau sebagai penyakit umum. Pemerintah memperkuat kesiapsiagaan menghadapi potensi wabah baru berdasarkan pengalaman pandemi.",
  },
];

function AboutContent() {
  return (
    <AboutSection>
      <h2>Perjalanan COVID-19 di Indonesia</h2>
      <CardContainer>
        {newsData.map((item, index) => (
          <Card key={index} title={item.title} content={item.content} />
        ))}
      </CardContainer>
    </AboutSection>
  );
}

export default AboutContent;
