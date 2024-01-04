import { Blob } from 'buffer';

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
    async convertFilestToBlob(files: FileList): Promise<TDataBlob[] | undefined> {
        if (files?.length > 0) {
            let listFiles = Array.from(files)?.map((file) => {
                const blob = URL.createObjectURL(file);
                return {
                    url: blob,
                    name: file.name,
                };
            });
            let res = (await Promise.all(listFiles)) as TDataBlob[];
            return res;
        }
    }
    async getBlobFromUrl(myImageUrl: any) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', myImageUrl, true);
            request.responseType = 'blob';
            request.onload = () => {
                resolve(request.response);
            };
            request.onerror = reject;
            request.send();
        });
    }

    async getDataFromBlob(myBlob: any) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(myBlob);
        });
    }

    async convertUrlToImageData(myImageUrl: any) {
        try {
            let myBlob = await this.getBlobFromUrl(myImageUrl);
            console.log(myBlob);
            let myImageData = await this.getDataFromBlob(myBlob);
            console.log(myImageData);
            return myImageData;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}
export const helper = new CoreHelper();
