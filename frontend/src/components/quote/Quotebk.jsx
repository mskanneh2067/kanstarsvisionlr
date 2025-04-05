import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { Combobox, Transition } from "@headlessui/react";
import { Solutions } from "../../data/DataSource";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Quote = ({ visible, onClose }) => {
  // ##################################################
  const [solutions, setSolutions] = useState(Solutions[0]);
  const [query, setQuery] = useState("");

  const filteredSolutions =
    query === ""
      ? Solutions
      : Solutions.filter((solution) =>
          solution.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  // ##################################################
  const handleClose = (e) => {
    if (e.target.id === "quote" || e.target.id === "close") {
      onClose();
    }
  };
  if (!visible) return null;
  // ##################################################
  return (
    <div className="z-105 max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-0 ">
      <form
        className=" relative border bg-white border-gray-200 px-6 py-8 rounded-sm shadow-md text-black w-full"
        //   onSubmit={onSubmit}
      >
        <BiX
          onClick={handleClose}
          className="absolute top-0 right-0 cursor-pointer text-[27px]   text-white bg-red-600"
          id="close"
        />
        <h1 className=" mb-8 text-[14px] lg:text-3xl text-center font-bold">
          Request for Quote
        </h1>

        <input
          type="text"
          className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
          placeholder="Company or Individual Name"
          required
        />
        <input
          type="email"
          className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
          placeholder="Work Email"
          required
        />
        <input
          type="phone"
          className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
          placeholder="Phone"
          required
        />
        <input
          type="text"
          className="block border border-grey-light w-full p-2 rounded mb-1 placeholder:text-[12px] lg:placeholder:text-[16px] lg:p-3 lg:mb-4"
          placeholder="Job Title"
          required
        />
        <div class="">
          <select className="block border border-grey-light w-full p-2 rounded mb-1 text-[12px]  lg:p-3 lg:mb-4">
            <option value>--Choose your country--</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Aland Islands">Aland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina" data-concent="3">
              Argentina
            </option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia" data-concent="2">
              Australia
            </option>
            <option value="Austria" data-concent="2">
              Austria
            </option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium" data-concent="2">
              Belgium
            </option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bonaire, Saint Eustatius And Saba">
              Bonaire, Saint Eustatius And Saba
            </option>
            <option value="Bosnia and Herzegowina">
              Bosnia and Herzegowina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil" data-concent="3">
              Brazil
            </option>
            <option value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria" data-concent="2">
              Bulgaria
            </option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Channel Islands">Channel Islands</option>
            <option value="Chile" data-concent="3">
              Chile
            </option>
            <option value="China" data-concent="3">
              China
            </option>
            <option value="China, Macao Special Administrative Region">
              China, Macao Special Administrative Region
            </option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombia" data-concent="3">
              Colombia
            </option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The DRC">Congo, The DRC</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'Ivoire">Cote D'Ivoire</option>
            <option value="Croatia (Local Name: Hrvatska)" data-concent="2">
              Croatia (Local Name: Hrvatska)
            </option>
            <option value="Cuba">Cuba</option>
            <option value="Curacao">Curacao</option>
            <option value="Cyprus" data-concent="2">
              Cyprus
            </option>
            <option value="Czech Republic" data-concent="2">
              Czech Republic
            </option>
            <option value="Denmark" data-concent="2">
              Denmark
            </option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="East Timor">East Timor</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">
              Falkland Islands (Malvinas)
            </option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland" data-concent="2">
              Finland
            </option>
            <option value="France" data-concent="2">
              France
            </option>
            <option value="France, Metropolitan">France, Metropolitan</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">
              French Southern Territories
            </option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany" data-concent="2">
              Germany
            </option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece" data-concent="2">
              Greece
            </option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard And Mc Donald Islands">
              Heard And Mc Donald Islands
            </option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong" data-concent="3">
              Hong Kong
            </option>
            <option value="Hungary" data-concent="2">
              Hungary
            </option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran (Islamic Republic Of)">
              Iran (Islamic Republic Of)
            </option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland" data-concent="2">
              Ireland
            </option>
            <option value="Isle Of Man" data-concent="2">
              Isle Of Man
            </option>
            <option value="Israel" data-concent="2">
              Israel
            </option>
            <option value="Italy" data-concent="2">
              Italy
            </option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan" data-concent="2">
              Japan
            </option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, D.P.R.O.">Korea, D.P.R.O.</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia" data-concent="2">
              Latvia
            </option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">
              Libyan Arab Jamahiriya
            </option>
            <option value="Liechtenstein" data-concent="2">
              Liechtenstein
            </option>
            <option value="Lithuania" data-concent="2">
              Lithuania
            </option>
            <option value="Luxembourg" data-concent="2">
              Luxembourg
            </option>
            <option value="Macau">Macau</option>
            <option value="Macedonia">Macedonia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta" data-concent="2">
              Malta
            </option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico" data-concent="3">
              Mexico
            </option>
            <option value="Micronesia, Federated States of">
              Micronesia, Federated States of
            </option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco" data-concent="2">
              Monaco
            </option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco" data-concent="2">
              Morocco
            </option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar (Burma) ">Myanmar (Burma) </option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands" data-concent="2">
              Netherlands
            </option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">
              Northern Mariana Islands
            </option>
            <option value="Norway" data-concent="2">
              Norway
            </option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Panama" data-concent="3">
              Panama
            </option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland" data-concent="2">
              Poland
            </option>
            <option value="Portugal" data-concent="2">
              Portugal
            </option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania" data-concent="2">
              Romania
            </option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Barthelemy">Saint Barthelemy</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and The Grenadines">
              Saint Vincent and The Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Sark">Sark</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore" data-concent="2">
              Singapore
            </option>
            <option value="Sint Maarten (Dutch Part)">
              Sint Maarten (Dutch Part)
            </option>
            <option value="Slovakia (Slovak Republic)" data-concent="2">
              Slovakia (Slovak Republic)
            </option>
            <option value="Slovenia" data-concent="2">
              Slovenia
            </option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa" data-concent="2">
              South Africa
            </option>
            <option value="South Georgia and South S.S.">
              South Georgia and South S.S.
            </option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain" data-concent="2">
              Spain
            </option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="St. Helena">St. Helena</option>
            <option value="St. Pierre and Miquelon">
              St. Pierre and Miquelon
            </option>
            <option value="State of Palestine">State of Palestine</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen Islands">
              Svalbard and Jan Mayen Islands
            </option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden" data-concent="2">
              Sweden
            </option>
            <option value="Switzerland" data-concent="2">
              Switzerland
            </option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan, Province of China" data-concent="2">
              Taiwan
            </option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">
              Tanzania, United Republic of
            </option>
            <option value="Thailand" data-concent="2">
              Thailand
            </option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey" data-concent="3">
              Turkey
            </option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">
              Turks and Caicos Islands
            </option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="U.S. Minor Islands">U.S. Minor Islands</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom" data-concent="2">
              United Kingdom
            </option>
            <option value="Uruguay" data-concent="3">
              Uruguay
            </option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City">Vatican City</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands (British)">
              Virgin Islands (British)
            </option>
            <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
            <option value="Wallis And Futuna Islands">
              Wallis And Futuna Islands
            </option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <label
          htmlFor="o365"
          className="block font-bold mb-2 text-sm  lg:text-lg xl:text-lg  text-center"
        >
          Solution of Interest
        </label>

        <Combobox value={solutions} onChange={setSolutions}>
          <div className="relative mt-1">
            <Combobox.Input
              className="block border border-grey-light w-full p-2 rounded mb-1 text-[12px] lg:text-[16px] lg:p-3 lg:mb-4"
              displayValue={(solution) => solution.title}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-10/12 lg:w-11/12 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredSolutions.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredSolutions.map((solution) => (
                  <Combobox.Option
                    key={solution.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#002a34] text-white" : "text-[#002a34]"
                      }`
                    }
                    value={solution}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {solution.title}
                        </span>

                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </Combobox>

        <div className="flex items-center p-1 mb-1 space-x-3">
          <button
            type="submit"
            className="w-full text-center py-2 rounded bg-green-700 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Send
          </button>
          <button
            type="reset"
            className="w-full text-center py-2 rounded bg-red-700 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Clear
          </button>
        </div>
        <div className="text-center text-[12px] lg:text-sm text-grey-dark mt-4">
          By sending this form, you agree to 1Lives{" "}
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default Quote;
