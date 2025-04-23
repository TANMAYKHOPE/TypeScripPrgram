// Var is Functinal Scope
function varScope() {
    if (true) {
        var Name = "tanmay";
        console.log(Name);
    }
    console.log(Name);
}
varScope();
