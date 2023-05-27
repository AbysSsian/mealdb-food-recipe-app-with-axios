import nicolas from "./nicolas.jpg";
import eliezer from "./eliezer.jpg";
import alvaro from "./alvaro.jpg";
import arya from "./arya.jpg";

export default function About() {
  return (
    <div>
      <div className="about-us">
        <center>
          <h1>
            About Us
            <br />
            Kelompok 2
          </h1>
          <div className="about-info">
            Kita membuat website ini karena sebagai mahasiswa, terkadang kita
            selalu bingung ingin makan apa, sehingga akhirnya menghabiskan
            sehari-hari hanya dengan makanan cepat saji atau makanan tak sehat.
            Kita juga merasa bosan dengan makanan yang sama setiap hari. Dengan
            website kami, kita tidak perlu bingung jika ingin mencoba sesuatu
            yang baru. Dengan hanya melihat website kami, mahasiswa dapat
            mencari makanan dari berbagai kategori sehingga mereka tidak akan
            bosan dengan pilihan makanannya.
          </div>
        </center>
      </div>

      <div className="main-info">
        <div className="profile">
          <img src={nicolas} alt="nico" />
          <div className="names">Nicolas Temawan</div>
          <div className="NIM">00000073411</div>
        </div>
        <div className="profile">
          <img src={eliezer} alt="eliezer" />
          <div className="names">Eliezer Raphael Willie Mahardika</div>
          <div className="NIM">00000073155</div>
        </div>
        <div className="profile">
          <img src={alvaro} alt="alvaro" />
          <div className="names">Christopher Alvaro Maria Samola</div>
          <div className="NIM">00000073214</div>
        </div>
        <div className="profile">
          <img src={arya} alt="Elisabeth Lauren" />
          <div className="names">Aryasenna Garnadi</div>
          <div className="NIM">00000072229</div>
        </div>
      </div>
    </div>
  );
}
