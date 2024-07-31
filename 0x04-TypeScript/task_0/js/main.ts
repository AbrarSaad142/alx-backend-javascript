interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}
const student1: Student = {
    firstName: 'Abrar',
    lastName: 'Saad',
    age: 29,
    location : 'Alex'
}

const student2: Student = {
    firstName: 'Anan',
    lastName: 'Saad',
    age: 27,
    location : 'Alex'
}
const studentsList: Array<Student> = [student1, student2];
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
