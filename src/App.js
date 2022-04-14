// import logo from './logo.svg';
// import './App.css';

/* ------- import ------- */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


/* ------- Class Biodata ------- */
class Biodata extends React.Component {
  
  /* ------- Constructor ------- */
  constructor() {
    super();
    this.state = {
      nama: '',
      tglLahir: '',
      jnsKelamin: '',
      hobi: '',
      agama: '',
      pesan: '',
    };

    /* ------- Bind ------- */
    this.handleName = this.handleName.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleReligion = this.handleReligion.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  

  /* ------- Handle Input ------- */
  handleName(event) {
    this.setState({nama: event.target.value});
  }

  handleBirthday(event) {
    this.setState({tglLahir: event.target.value});
  }

  handleGender(event) {
    this.setState({jnsKelamin: event.target.value});
  }

  handleReligion(event) {
    this.setState({agama: event.target.value});
  }

  handleMessage(event) {
    this.setState({pesan: event.target.value});
  }


  // handle Submit button
  handleSubmit(event) {

    // default
    event.preventDefault();

    // mendapatkan element input form
    const form = document.getElementById("input-form");

    // mendapatkan element form hobi
    let arrHobby = form.elements["hobby"];

    // tampungan hobi akhir hobi
    let hobiFinal = "";

    // looping mengisi data hobi
    // sepanjang banyak hobi
    for (let i = 0; i < arrHobby.length; i++) {

      // jika arrHobby berisi/ada
      if (arrHobby[i].checked) {

        // jika banyak kata lebih dari satu
        if (hobiFinal.length > 0) {

          // menambahkan koma
          hobiFinal += ", ";
        }

        // increment
        hobiFinal += arrHobby[i].value;
      }
    }

    // mengisi data
    this.setState({hobi: hobiFinal});

    // mendapatkan element biodata tabel
    const table = document.getElementById("biodata-table");
    
    // menampilkan table
    table.classList.remove("d-none");
  }


  /* ------- Render ------- */
  render() {
    return (
      <div className="Biodata">
        <header className="Biodata-header">

          {/* Main Container */}
          <div className="container mt-5 mb-5">

            {/* Card Formulir */}
            <div className="card shadow py-3 px-5 rounded-3">

              {/* Title Card : Biodata*/}
              <h1 className="card-title text-center fw-bold py-3">
                Biodata
              </h1>

              {/* Formulir */}
              <form id="input-form" onSubmit={this.handleSubmit}>

                {/* Nama */}
                <div className="mb-3">
                    <label for="name" className="form-label">Nama Lengkap</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Masukkan Nama" onChange={this.handleName} required />
                </div>

                {/* Tanggal Lahir */}
                <div className="mb-3">
                    <label for="birthday" className="form-label">Tanggal Lahir</label>
                    <input type="date" className="form-control" id="birthday" name="birthday" onChange={this.handleBirthday} required />
                </div>
                
                {/* Jenis Kelamin */}
                <div className="mb-3">
                    <label for="gender" className="form-label">Jenis Kelamin</label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Laki-Laki" onChange={this.handleGender} required />
                        <label className="form-check-label" for="inlineRadio1">Laki-Laki</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Perempuan" onChange={this.handleGender} required />
                        <label className="form-check-label" for="inlineRadio2">perempuan</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio3" value="Other" onChange={this.handleGender} required />
                        <label className="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                </div>

                {/* Hobi */}
                <div className="mb-3">
                    <label for="hobby" className="form-label">Hobi</label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox1" value="Ngoding" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox1">Ngoding</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox2" value="Rebahan" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox2">Rebahan</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox3" value="Melamun" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox3">Melamun</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox4" value="Baca Buku" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox4">Baca Buku</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox5" value="Nonton Youtube" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox5">Nonton Youtube</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox6" value="Dengerin Lagu" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox6">Dengerin Lagu</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" name="hobby" id="inlineCheckbox7" value="Other" onChange={this.handleHobby} />
                        <label className="form-check-label" for="inlineCheckbox2">Other</label>
                    </div>
                </div>
                
                {/* Agama */}
                <div className="mb-3">
                    <label for="religion" className="form-label">Agama</label>
                    <select className="form-select" aria-label="Default select example" id="religion" name="religion" onChange={this.handleReligion} required>
                        <option value="Budha" selected>Budha</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Islam">Islam</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Tao">Tao</option>
                        <option value="Protestan">Protestan</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                {/* Pesan */}
                <div className="mb-3">
                    <label for="message" className="form-label">Pesan</label>
                    <textarea className="form-control" id="message" name="message" placeholder="Masukkan Pesan" rows="7" onChange={this.handleMessage} required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Submit</button>
              
              </form>

              {/* Tabel Akhir */}
              <table className="table mt-5 d-none" id="biodata-table">
                <thead>
                    <tr>
                        <th scope="col" className="w-25">Label</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Nama</th>
                        <td className="dataName">{this.state.nama}</td>
                    </tr>
                    <tr>
                        <th scope="row">Tanggal Lahir</th>
                        <td className="dataBirthday">{this.state.tglLahir}</td>
                    </tr>
                    <tr>
                        <th scope="row">Jenis Kelamin</th>
                        <td className="dataGender">{this.state.jnsKelamin}</td>
                    </tr>
                    <tr>
                        <th scope="row">Hobi</th>
                        <td className="dataHobby">{this.state.hobi}</td>
                    </tr>
                    <tr>
                        <th scope="row">Agama</th>
                        <td className="dataReligion">{this.state.agama}</td>
                    </tr>
                    <tr>
                        <th scope="row">Pesan</th>
                        <td className="dataMessage">{this.state.pesan}</td>
                    </tr>
                </tbody>
              </table>

            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Biodata;
