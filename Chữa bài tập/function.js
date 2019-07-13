function findMinNumber(numbers) {
			return Math.min.apply(null, numbers);
		}

		function findMinNumber2(numbers) {
			numbers.sort(function(a, b){return a-b})[0];
			return numbers[0];
		}

		function sortStudents(students) {
			students.sort();
			document.write(students.join('<br>'));
		}