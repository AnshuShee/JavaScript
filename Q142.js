let str = "Anshu";

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        if (str[i] === "A" || str[i] === "a") {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
