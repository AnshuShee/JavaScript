let str = "Anshu!";

for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) {
        if (str[i] === "!" ) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}