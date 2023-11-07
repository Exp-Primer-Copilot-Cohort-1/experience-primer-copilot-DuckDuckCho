interface Member {
    name: string;
    age: number;
    skills: string[];
}

function skillsMember(member: Member) {
    console.log(`${member.name} has the following skills: ${member.skills.join(", ")}`);
}

