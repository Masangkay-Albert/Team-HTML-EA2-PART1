"use strict";
var MemberRole;
(function (MemberRole) {
    MemberRole[MemberRole["Developer"] = 0] = "Developer";
    MemberRole[MemberRole["Designer"] = 1] = "Designer";
    MemberRole[MemberRole["Tester"] = 2] = "Tester";
    MemberRole[MemberRole["ProjectManager"] = 3] = "ProjectManager";
    MemberRole[MemberRole["Documenter"] = 4] = "Documenter";
})(MemberRole || (MemberRole = {}));
function roleToString(role) {
    return MemberRole[role];
}
const member1Object = {
    id: 1,
    name: "John Albert Masangkay",
    role: MemberRole.Developer,
    age: 22,
    email: "MJD0701@dlsud.edu.ph",
    isActive: true,
    print() {
        console.log("---- Member 1 ----");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Role: ${roleToString(this.role)}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Active: ${this.isActive}`);
    },
};
const member2Object = {
    id: 2,
    name: "Gracy Mae Luna",
    role: MemberRole.Designer,
    age: 21,
    email: "LGC0936@dlsud.edu.ph",
    isActive: true,
    print() {
        console.log("---- Member 2 ----");
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Role: ${roleToString(this.role)}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
        console.log(`Active: ${this.isActive}`);
    },
};
member1Object.print();
member2Object.print();
