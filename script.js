const API_URL = "http://localhost:7071/api/students";
const form = document.getElementById("studentForm");
const message = document.getElementById("message");
const loadButton = document.getElementById("loadStudents");
const tableBody = document.getElementById("studentsTable");


form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullName =
        document.getElementById("fullName").value;

    const email =
        document.getElementById("email").value;

    const course =
        document.getElementById("course").value;

    const student = {
        fullName,
        email,
        course
    };

    try {
        const response = await fetch(
            API_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(student)
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Registration failed"
            );
        }

        message.textContent =
            "Student registered successfully!";

        form.reset();

    } catch (error) {
        console.error(error);

        message.textContent =
            "Something went wrong.";
    }
});


// ============================
// LOAD STUDENTS
// ============================

loadButton.addEventListener("click", async function () {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load students");
        }

        const students = await response.json();

        // Clear the table
        tableBody.innerHTML = "";

        // Display every student
        students.forEach(student => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.StudentID}</td>
                <td>${student.FullName}</td>
                <td>${student.Email}</td>
                <td>${student.Course}</td>
                <td>
                    <button onclick="deleteStudent(${student.StudentID})">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);

        });

    } catch (error) {

        console.error("Error loading students:", error);

        tableBody.innerHTML = `
            <tr>
                <td colspan="5">
                    Unable to load students.
                </td>
            </tr>
        `;
    }

});


// ============================
// DELETE STUDENT
// ============================

async function deleteStudent(studentId) {

    const confirmed = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
        return;
    }

    try {

        const response = await fetch(
            `${API_URL}?id=${studentId}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to delete student"
            );
        }

        message.textContent =
            "Student deleted successfully!";

        // Reload the student list
        loadButton.click();

    } catch (error) {

        console.error("Error deleting student:", error);

        message.textContent =
            "Unable to delete student.";
    }
}