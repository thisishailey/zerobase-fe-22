export let hour;
export let minute;
export let second;

export function getTime() {
    const time = new Date();
    hour = time.getHours();
    minute = time.getMinutes();
    second = time.getSeconds();
}