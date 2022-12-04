function canGiveBlood(donor,receiver) {


    if (donor == "A+") {
        if (receiver == "A+" || receiver == "AB+") {
            return true
        }
        return false
    }

    if (donor == "O+") {
        if (receiver == "O+" || receiver == "A+" || receiver == "B+" || receiver == "AB+") {
            return true
        }
        return false
    }

    if (donor == "B+") {
        if (receiver == "B+" || receiver == "AB+") {
            return true
        }
        return false
    }

    if (donor == "AB+") {
        if (receiver == "AB+") {
            return true
        }
        return false
    }

    if (donor == "A-") {
        if (receiver == "A+" || receiver == "A+" || receiver == "AB+" || receiver == "AB-") {
            return true
        }
        return false
    }

    if (donor == "O-") {
        return true
    }

    if (donor == "B-") {
        if (receiver == "B+" || receiver == "B-" || receiver == "AB+" || receiver == "AB-") {
            return true
        }
        return false
    }

    if (donor == "AB-") {
        if (receiver == "AB+" || receiver == "AB-") {
            return true
        }
        return false
    }

}

console.log(Blootype("AB+","O-"))