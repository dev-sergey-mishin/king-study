module.exports.submit = (name, phone, email) => {
    const params = {
        name: name,
        phone: phone,
        email: email,
        urlParams: window.location.search,
    };

    // emailjs.init("user_NUe2TrqxnTsydkAZXFMNW");
    // emailjs.send("gmail","kingstudy", params).then(
    //         (response) => { console.log("SUCCESS", response); },
    //         (error) => { console.log("FAILED", error); }
    //     );
    //
    // emailjs.init("user_NUe2TrqxnTsydkAZXFMNW");
    // emailjs.send("gmail","gml", params).then(
    //     (response) => { console.log("SUCCESS", response); },
    //     (error) => { console.log("FAILED", error); }
    // );

    let formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email ? email : '');
    formData.append('urlParams', window.location.search);

    fetch('/send.php', {
        method: 'post',
        credentials: 'include',
        body: formData
    }).then(
        function (res) {
            console.log(res)
        }
    );


};