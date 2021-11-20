(function () {

    function total_exp(start_date) {
        let TODAY = new Date();
        let MONTH = TODAY.getMonth() + 1;
        let YEAR = TODAY.getFullYear();
    
        let START_DATE = new Date(start_date);
        let START_MONTH = START_DATE.getMonth() + 1;
        let START_YEAR = START_DATE.getFullYear();
    
        let MONTH_DIFF = MONTH - START_MONTH;
        let YEAR_DIFF = YEAR - START_YEAR;
    
        let TOTAL_EXP = 0;
        if (MONTH_DIFF > 0) {
            TOTAL_EXP = YEAR_DIFF.toString() + " years " + MONTH_DIFF.toString() + " months";
        } else if (MONTH_DIFF < 0) {
            TOTAL_EXP = (YEAR_DIFF - 1).toString() + " years " + (12 + MONTH_DIFF).toString() + " months";
        } else if (MONTH_DIFF = 0) {
            TOTAL_EXP = YEAR_DIFF.toString() + " years";
        }
        return TOTAL_EXP;
    }

    let TOTAL_EXP_SELECTOR = document.getElementById("total-exp");
    let EXP_START_DATE = TOTAL_EXP_SELECTOR.dataset.start;

    TOTAL_EXP_SELECTOR.innerText = total_exp(EXP_START_DATE);
})();
