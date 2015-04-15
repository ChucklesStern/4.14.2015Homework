var FirebaseURL = 'https://radiant-torch-6001.firebaseio.com/.json';

var AddressBook = function (name, phone, address, email) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.email = email;
}

var contacts = [];

var createAddress = function () {
    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    var address = document.getElementById('inputAddress').value;
    var email = document.getElementById('inputEmail').value;
    var contactObj = new AddressBook(name, phone, address, email);
    PostAjax(contactObj);
}

var PostAjax = function (contactPerson) {

    var request = new XMLHttpRequest();

    request.open('POST', FirebaseURL, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            contacts.push(contactPerson)
            console.log("Sucsess");
        } else {
            console.log("You have a" + this.status + "code");
        }
    }
    request.send(JSON.stringify(contactPerson));
    console.log(JSON.stringify(contactPerson));

}

var GetAjax = function (contacts) {
    var request = new XMLHttpRequest();

    request.open('GET', FirebaseURL, true);

    request.onload = function () {
        var response = JSON.parse(this.response);
        for (var prop in response) {
            console.log(prop);
            console.log(response[prop]);
        }
    }
    request.send()
}
GetAjax();