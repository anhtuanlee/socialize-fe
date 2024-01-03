class CoreHelper {
    constructor() { }
    convertDate(timer: Date) {
        const timerCurrent = new Date().getTime();
        const timerBefore = new Date(timer).getTime();
        const timeDifferent = timerCurrent - timerBefore;
        const minutes = Math.floor(timeDifferent / (1000 * 60)) % 60;
        const hours = Math.floor(timeDifferent / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeDifferent / (1000 * 60 * 60 * 24));

        if (hours === 0 && days === 0) {
            return `${minutes} phút`;
        } else if (hours && days === 0) {
            return `${hours} giờ`;
        } else if (days) {
            return `${days} ngày`;
        } else if (days > 30) {
            return `${Math.floor(days / 30)} tháng`;
        } else if (days > 365) {
            return `${Math.floor(days / 365)} năm`;
        }
    }
}
export const helper = new CoreHelper();
