<form
className="Form"
name={name}
action={action}
onSubmit={this.handleSubmit}
data-netlify=""
netlify-recaptcha=""
>
{this.state.alert && (
  <div className="Form--Alert">{this.state.alert}</div>
)}
<div className="Form--Group">
  <label className="Form--Label">
    <input
      className="Form--Input Form--InputText"
      type="text"
      placeholder="Firstname"
      name="firstname"
      required
    />
    <span>Firstname</span>
  </label>
  <label className="Form--Label">
    <input
      className="Form--Input Form--InputText"
      type="text"
      placeholder="Lastname"
      name="lastname"
      required
    />
    <span>Lastname</span>
  </label>
</div>
<fieldset>
  <label className="Form--Label Form--Radio">
    <input
      className="Form--RadioInput"
      type="radio"
      name="gender"
      value="male"
      defaultChecked
    />
    <span>Male</span>
  </label>
  <label className="Form--Label Form--Radio">
    <input
      className="Form--RadioInput"
      type="radio"
      name="gender"
      value="female"
    />
    <span>Female</span>
  </label>
</fieldset>
<label className="Form--Label">
  <input
    className="Form--Input Form--InputText"
    type="email"
    placeholder="Email"
    name="emailAddress"
    required
  />
  <span>Email address</span>
</label>
<label className="Form--Label has-arrow">
  <select
    className="Form--Input Form--Select"
    name="type"
    defaultValue="Type of Enquiry"
    required
  >
    <option disabled hidden>
      Type of Enquiry
    </option>
    <option>Need to know more</option>
    <option>Found a bug</option>
    <option>Want to say hello</option>
  </select>
</label>
<label className="Form--Label">
  <textarea
    className="Form--Input Form--Textarea Form--InputText"
    placeholder="Message"
    name="message"
    rows="10"
    required
  />
  <span>Message</span>
</label>
<label className="Form--Label Form-Checkbox">
  <input
    className="Form--Input Form--Textarea Form--CheckboxInput"
    name="newsletter"
    type="checkbox"
  />
  <span>Get news updates</span>
</label>
<div
  className="g-recaptcha"
  data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
/>
{!!subject && <input type="hidden" name="subject" value={subject} />}
<input type="hidden" name="form-name" value={name} />
<input
  className="Button Form--SubmitButton"
  type="submit"
  value="Enquire"
  disabled={this.state.disabled}
/>
</form>