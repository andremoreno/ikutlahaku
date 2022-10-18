---
layout: page
title: Kontak
stitle: Kontak Kami
permalink: /kontak/
weight: 6
---

<div class="form-style" id="contact_form">
    <div id="contact_results"></div>
    <div id="contact_body">

	Kalau kamu punya pertanyaan, punya kritik, ataupun saran yang membangun, atau hanya sekedar mau curhat bisa menggunakan form dibawah ini.

        <label><span>Nama <span class="required">*</span></span>
            <input type="text" name="name" id="name" required="true" class="input-field"/>
        </label>
        <label><span>Email <span class="required">*</span></span>
            <input type="email" name="email" required="true" class="input-field"/>
        </label>
        <label><span>Telp</span>
            <input type="text" name="phone" maxlength="15"  required="true" class="tel-number-field long" />
        </label>
            <label for="subject"><span>Subyek</span>
			<input type="text" name="subject" required="true" class="input-field"/>
        </label>
        <label for="field5"><span>Pesan <span class="required">*</span></span>
            <textarea name="message" id="message" class="textarea-field" required="true"></textarea>
        </label>
        <label>
            <span>&nbsp;</span><input type="submit" id="submit_btn" value="Kirim!" />
        </label>
    </div>
</div>

---
