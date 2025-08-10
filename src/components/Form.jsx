import React, { useState } from "react";
import { toast } from "react-toastify";


export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Category_Project: "",
    Name_Project: "",
    Price: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const url =
      "https://script.google.com/macros/s/AKfycbxTY1NjWUCOju7OkYBDaaM5NdDJrerwP4JrKOjcwDaAzmz-muJHA6HuJUY2oKGO0EA7gw/exec";

    const encodedData = new URLSearchParams(formData).toString();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then((res) => res.text())
      .then((data) => {
       toast.success(data, { position: "top-right", autoClose: 3000 });
        
        const pesan = 
        `Halo, saya ${formData.Name}
        Email: ${formData.Email}
        Jenis Project: ${formData.Category_Project}
        Nama Project: ${formData.Name_Project}
        Budget: Rp. ${Number(formData.Price).toLocaleString('id-ID')}

        Saya ingin melakukan kerja sama dengan Anda untuk pembuatan project ini.`;

          // Encode untuk URL
          const encodedPesan = encodeURIComponent(pesan);

         
      // Redirect WA
      setTimeout(() => {
            window.location.href = `https://wa.me/6288704442416?text=${encodedPesan}`;
          }, 1500)

        setFormData({
          Name: "",
          Email: "",
          Category_Project: "",
          Name_Project: "",
          Price: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Terjadi kesalahan saat mengirim data.", { position: "top-right", autoClose: 3000 });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
    
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-full max-w-screen-xl px-4 2xl:px-0">
            
          <div className="flex justify-center items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#2cff79ff"
                strokeWidth="10"
                fill="none"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="55"
                fontWeight="bold"
                fill="#2cff79ff"
              >
                E
              </text>
            </svg>
            <div  className="text-2xl font-bold text-green-400 ml-2 ">Elxiwix Project.</div>
          </div>

          <form onSubmit={handleSubmit} >
            <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div class="min-w-0 flex-1 space-y-8">
                <div class="space-y-4">
                  <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Form Pemesanan</h2>

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Nama Lengkap*</label>
                      <input    name="Name"
                        type="text"
                        value={formData.Name}
                        onChange={handleChange}
                        placeholder="Nama Lengkap"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                    </div>

                    <div>
                      <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email* </label>
                      <input  
                        name="Email"
                        type="email"
                        value={formData.Email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" />
                    </div>

                    <div>
                      <div class="mb-2 flex items-center gap-2">
                        <label for="select-country-input-3" class="block text-sm font-medium text-gray-900 dark:text-white"> Jenis Project* </label>
                      </div>
                      <select  
                        name="Category_Project"
                        value={formData.Category_Project}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        
                        <option value="">-- Pilih Kategori --</option>
                        <option value="Aplikasi Web">Aplikasi Web</option>
                        <option value="Company Profile">Company Profile</option>
                        <option value="Web Dinamis">Web Dinamis</option>
                        <option value="Undangan Digital">Undangan Digital</option>
                        <option value="Landing Page">Landing Page</option>
                      </select>
                    </div>


                    <div>
                      <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Nama Proyek </label>
                      <input 
                        name="Name_Project"
                        type="text"
                        value={formData.Name_Project}
                        onChange={handleChange}
                        placeholder="Contoh: Website Portfolio"
                        required 
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"/>
                    </div>

                    <div>
                      <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Tawarkan Budget </label>
                      <input 
                        name="Price"
                        type="number"
                        value={formData.Price}
                        onChange={handleChange}
                        placeholder="Contoh: 1500000 (tanpa titik/koma)"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"  />
                    </div>

                    <div class="sm:col-span-2">
                      <button  
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200  px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 transition duration-300 ${
                          isSubmitting
                            ? "bg-gray-200 cursor-not-allowed"
                            : "bg-white dark:bg-gray-800 hover:bg-gray-400"
                        }`}
                    >
                        {isSubmitting ? "Mengirim..." : "Tambahkan"}
                      </button>
                    </div>
                  </div>
                </div>

                
              </div>

              <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div class="flow-root">
                  <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Order By</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{formData.Name || "-"}</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Email</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{formData.Email || "-"}</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Jenis Proyek</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{formData.Category_Project || "-"}</dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Nama Proyek</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white"> {formData.Name_Project || "-"}</dd>
                    </dl>

                    
                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Budget di tawar</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        {formData.Price 
                          ? `Rp. ${Number(formData.Price).toLocaleString('id-ID')}` 
                          : "-"
                        }
                      </dd>
                    </dl>

                  </div>
                </div>

              </div>
            </div>
          </form>
          {/* Divider */}
            <div className="border-t border-gray-300 mt-6 pt-4 text-sm text-center text-gray-300">
              © {new Date().getFullYear()} Elxiwix Studio. All rights reserved.
            </div>
        </section>

      </div>
  
    </>
  );
}
