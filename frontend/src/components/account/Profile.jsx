import { useState } from "react";
import PasswordStrengthMeter from "../passwordstrengthmeter/PasswordStrengthMeter";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import profile from "../../assets/images/src/profile/profile.png";
import { useSelector } from "react-redux";
import { setCredentials } from "../../features/users/userSlice";
const Profile = () => {
  const [viewcupwd, setViewCuPWD] = useState(false);
  const [viewpwd, setViewPWD] = useState(false);
  const [viewcpwd, setViewCPWD] = useState(false);
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const { userInfo } = useSelector((state) => state.user);
  return (
    // Email
    <div className="w-full md:max-w-[320px] md:mx-auto ">
      <div className="w-full p-5 border border-gray-200 rounded-xl shadow-md mb-10">
        <label htmlFor="email" className="text-sm font-semibold ">
          Email Address
        </label>
        <div className="w-full my-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Email"
            required
            className=" w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
        </div>
        <p className="mt-2 text-sm font-normal text-blue-600 cursor-pointer">
          Change Email Address
        </p>
      </div>

      {/* Password */}
      <div className="w-full p-5 border border-gray-200 rounded-xl shadow-md mb-10">
        <p className="text-ms font-semibold mb-2">Password</p>
        <label htmlFor="email" className="text-xs font-semibold ">
          Current Password
        </label>

        <div className="relative w-full my-1">
          <input
            type={viewcupwd ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="off"
            placeholder="Current Password"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          {viewcupwd ? (
            <FaEye
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewCuPWD(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewCuPWD(true)}
            />
          )}
        </div>
        <p className="flex justify-end mt-2 text-sm font-normal text-blue-600 cursor-pointer">
          Reset Password
        </p>

        <label htmlFor="email" className="text-xs font-semibold ">
          New Password
        </label>
        <div className="relative w-full my-1">
          <input
            type={viewpwd ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="New Password"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          {viewpwd ? (
            <FaEye
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewPWD(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewPWD(true)}
            />
          )}
        </div>
        <label htmlFor="email" className="text-xs font-semibold ">
          Confirm Password
        </label>
        <div className="relative w-full my-1">
          <input
            type={viewcpwd ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            placeholder="Confirm Password"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          {viewcpwd ? (
            <FaEye
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewCPWD(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setViewCPWD(true)}
            />
          )}
        </div>
        {/* Password strength metter */}
        <PasswordStrengthMeter password={password} />
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md p-2 mt-7  bg-[#002c38] text-white font-bold text-xs"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Profile */}
      <div className="w-full p-5 border border-gray-200 rounded-xl shadow-md mb-10">
        <div className="flex justify-between mb-7">
          <p className="text-sm font-semibold ">Profile</p>
          <img
            src={userInfo.avatar || profile}
            alt=""
            className="w-5 h-5 object-contain rounded-full"
          />
        </div>

        <div className="w-full my-1">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
            placeholder="First Name"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
            placeholder="Last Name"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="off"
            placeholder="Company(optional)"
            required
            className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
          />
          <div>
            <label htmlFor="email" className="text-xs font-semibold mb-3">
              Position (optional)
            </label>
            <select className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal">
              <option value="">--Select Position--</option>
              <option value="">IT Executive</option>
              <option value="">Business Executive</option>
              <option value="">Software Developer / Engineer</option>
              <option value="">Architech</option>
              <option value="">DBA</option>
              <option value="">Technical Operations</option>
              <option value="">Product / Project Manager</option>
              <option value="">Student</option>
              <option value="">Educator</option>
              <option value="">Other</option>
            </select>
          </div>

          <div class="">
            <label htmlFor="email" className="text-xs font-semibold mb-3">
              Country (optional)
            </label>
            <select className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal">
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
                China, Macao SAR
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
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
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
              <option value="Virgin Islands (U.S.)">
                Virgin Islands (U.S.)
              </option>
              <option value="Wallis And Futuna Islands">
                Wallis And Futuna Islands
              </option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
          <label htmlFor="email" className="text-xs font-semibold ">
            Phone Number (optional)
          </label>
          <div className="relative w-full my-1">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="off"
              placeholder="+0(000) 000-0000"
              required
              className="w-full rounded-md border p-2 mb-3 bg-[rgb(234,237,255)] placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md p-2 mt-7  bg-[#002c38] text-white font-bold text-xs"
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="w-full p-5 border border-gray-200 rounded-xl shadow-md mb-10">
        <p className="text-sm font-semibold mb-7">Delete Account</p>
        <p className="text-xs font-normal">
          You will lose access to your account ounce your deletion request has
          been submitted.
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md p-3 md:p-2 mt-7  bg-[#db3030] text-white font-semibold text-xs"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
