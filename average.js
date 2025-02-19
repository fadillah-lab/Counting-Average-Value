const average = (...values) => {
  try {
    if (!values.every((sum) => typeof sum === "number")) {
      throw new Error("Invalid input, please provide only numbers.");
    }
    // menggunakan fungsi reduce pada array untuk menghitung nilai rata-rata
    const total =
      values.reduce((sum, number) => sum + number, 0) / values.length;
    const roundedTotal = Math.round(total);

    // Menggunakan array of object untuk mendapatkan grade berdasarkan nilai rata2 tertentu
    const grades = [
      { min: 90, grade: "A" },
      { min: 80, grade: "B" },
      { min: 70, grade: "C" },
      { min: 60, grade: "D" },
      { min: 0, grade: "E" },
    ];

    const grade = grades.find(
      (elementOfGrades) => total >= elementOfGrades.min
    );
    const status =
      total >= 60 ? "You've pass the test" : "You've to take the test again";

    return `${status}. Your score is ${roundedTotal} and you grade is ${grade.grade}.`;
  } catch (error) {
    console.error(error.message);
    return null;
  } finally {
    console.log(
      "Menghitung Rata-Rata Nilai Peserta Memasak Berdasarkan : Cita Rasa, Teknik Memasak, Penyajian."
    );
  }
};

console.log(average(80, 80, 90));
