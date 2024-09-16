function selectPlan(planId) {
    // Remove 'selected' class from all memberships
    document.querySelectorAll('.membership').forEach(plan => {
        plan.classList.remove('selected');
    });

    // Add 'selected' class to the clicked membership
    document.getElementById(planId).classList.add('selected');
}
