enum MemberRole {
  Developer,
  Designer,
  Tester,
  ProjectManager,
  Documenter,
}

type TeamMember = {
  id: number;
  name: string;
  role: MemberRole;
  age: number;
  email: string;
  isActive?: boolean;
  print: () => void;
};

function roleToString(role: MemberRole): string {
  return MemberRole[role];
}

const member1Object: TeamMember = {
  id: 1,
  name: "John Albert Masangkay",
  role: MemberRole.Developer,
  age: 22,
  email: "MJD0701@dlsud.edu.ph",
  isActive: true,
  print(): void {
    console.log("---- Member 1 ----");
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${roleToString(this.role)}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
    console.log(`Active: ${this.isActive}`);
  },
};

const member2Object: TeamMember = {
  id: 2,
  name: "Gracy Mae Luna",
  role: MemberRole.Designer,
  age: 21,
  email: "LGC0936@dlsud.edu.ph",
  isActive: true,
  print(): void {
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