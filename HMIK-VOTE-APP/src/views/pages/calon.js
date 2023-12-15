import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataJobContext } from "../../context/dataContext";
import candidate1 from "../../assets/candidate1.jpg";
import candidate2 from "../../assets/candidate2.jpg";
import candidate3 from "../../assets/candidate3.jpg";

// import candidate3 from "../../assets/zhafran1.jpeg";
// import candidate4 from "../../assets/zhafran2.jpg";

const Form = () => {
  const navigate = useNavigate();
  const { handleFunctions, state } = useContext(DataJobContext);
  let { handleVoteA, handleVoteB, handleVoteC } = handleFunctions;

  let { input } = state;
  useEffect(() => {
    if (!Boolean(input.uniqueCode)) {
      navigate("/");
    }
  }, []);
  return (
    // Kanidat 1
    <div>
      {/* <h1>Welcome to CALON PAGE </h1>
      <p>This is where you can find all the latest updates and information.</p> */}
      <form className="columnContainer">
        <div className="rowContainer">
          <div className="candidateCard">
            <div className="candidateImgContainer">
              <img src={candidate1} alt="Foto kandidat 1" />
            </div>
            <div className="candidate-card-container">
              <h2>Visi</h2>
              <p className="text-justify">
                Menjadi pusat keunggulan akademik dan pengembangan pribadi yang menjadi landasan bagi mahasiswa Ilmu Komputer untuk mencapai kualitas terbaik dalam pengetahuan dan keterampilan, sembari mendorong terciptanya lingkungan yang penuh harmoni, prestasi, dan pembangunan yang berkelanjutan. Berkomitmen untuk membentuk komunitas yang terbuka, mendukung pertumbuhan personal, serta berorientasi pada peningkatan berkelanjutan untuk kemajuan bersama di bidang Ilmu Komputer.



              </p>
              <h2>Misi</h2>
              <ol className="text-justify">
                <li>
                  Prestasi: Meningkatkan kompetensi mahasiswa Ilmu Komputer dalam ranah akademik dan non-akademik, mengarahkan mereka menuju pengembangan potensi yang ambisius, tekun, dan gigih.

                </li>
                Harmoni: Memadukan komponen-komponen program studi Ilmu Komputer untuk membentuk sebuah atmosfer harmoni yang menjadikan kesatuan sebagai keluarga.
                <li>
                  -Identitas: Membentuk himpunan mahasiswa ilmu komputer sebagai wadah yang sigap, tangkas, dan cekatan dalam penyediaan serta pengorganisasian  kegiatan pemberdayaan mahasiswa guna memperkuat dan memperluas citra program studi ilmu komputer

                </li>
                <li>
                  Pembangunan Berkelanjutan : Memberikan perubahan dinamis tergantung permasalahan yang sedang dihadapi serta memperbaiki kekurangan yang ada.

                </li>
              </ol>
              <button onClick={handleVoteA} className="submitVote">
                VOTE KABINET ABHIPRAYA ACALAPATI
              </button>
            </div>
          </div>
          {/*Kandidat 2  */}
          <div className="candidateCard">
            <div className="candidateImgContainer">
              <img src={candidate2} alt="Foto kandidat 2" />
            </div>
            <div className="candidate-card-container">
              <h2>Visi</h2>
              <p className="text-justify">
                Terwujudnya HMIK yang aktif dan kolaboratif, sebagai sarana untuk berkreasi dan berinovas
              </p>
              <h2>Misi</h2>
              <ol className="text-justify">
                <li>
                  Menciptakan lingkungan kerja yang nyaman dengan sersan ( serius tapi santai )

                </li>
                <li>
                  Mengeksplorasi potensi tiap mahasiswa sesuai kompetensi baik dalam bidang akademik maupun non-akademik

                </li>

                <li>
                  Meningkatkan kerjasama dan relasi antar prodi, fakultas, dan universitas. Terkhusus dalam pengembangan SDM
                </li>

                <li>
                  Membangun kepekaan dengan meningkatkan rasa kebersamaan, kepedulian, dan saling menghormati antar anggota HMIK.
                </li>

              </ol>
              <button onClick={handleVoteB} className="submitVote">
                VOTE KABINET VASCO DA GAMA
              </button>
            </div>
          </div>
          {/* Kandidat 3 */}
          <div className="candidateCard">
            <div className="candidateImgContainer">
              <img src={candidate3} alt="Foto kandidat 3" />
            </div>
            <div className="candidate-card-container">
              <h2>Visi</h2>
              <p className="text-justify">
                Menjadikan HMIK Universitas Pertamina sebagai ekosistem optimalisasi potensi dan aktualisasi diri yang berlandaskan asas kekeluargaan

              </p>
              <h2>Misi</h2>
              <ol className="text-justify">
                <li>
                  Menjadikan ekosistem yang inklusif bagi seluruh anggota HMIK untuk mengembangkan potensi
                </li>
                <li>
                  Meningkatkan keharmonisan hubungan antara Mahasiswa, Dosen, dan Alumni Ilmu Komputer Universitas Pertamina

                </li>

                <li>
                  Mewujudkan semangat kerjasama dan partisipasi aktif Mahasiswa Ilmu Komputer dengan elemen internal maupun external
                </li>
              </ol>
              <button onClick={handleVoteC} className="submitVote">
                VOTE KABINET PARIVARTANAYA
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
