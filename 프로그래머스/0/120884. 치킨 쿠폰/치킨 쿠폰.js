function solution(chicken) {
    let coupons = chicken;
    let serviceChicken = 0;

    while (coupons >= 10) {
        let newServiceChicken = Math.floor(coupons / 10);
        serviceChicken += newServiceChicken;
        coupons = (coupons % 10) + newServiceChicken;
    }

    return serviceChicken;
}