export const getDate = (date: string): string => {
    const dateArticle = new Date(date);
    const dateNow = new Date();

    const yearArticle = dateArticle.getFullYear();
    const monthArticle = dateArticle.getMonth();
    const dayArticle = dateArticle.getDate();
    const hourArticle = dateArticle.getHours();
    const minuteArticle = dateArticle.getMinutes();

    const yearNow = dateNow.getFullYear();
    const monthNow = dateNow.getMonth();
    const dayNow = dateNow.getDate();

    const year = yearNow - yearArticle;
    const month = monthNow - monthArticle;
    const day = dayNow - dayArticle;

    if(year !== 0) return `${getMonthName(monthArticle)} ${dayArticle}, ${yearArticle}`;
    if(month !== 0 || (day !== 0 && day !== 1)) return `${getMonthName(monthArticle)} ${dayArticle}`;
    if(day === 1) return `Yesterday`;
    if(hourArticle < 12) return `${hourArticle > 9 ? hourArticle : `0${hourArticle}`}:${minuteArticle > 9 ? minuteArticle : `0${minuteArticle}`} am`;
    return `${(((hourArticle - 1) % 12) + 1) > 9 ? ((hourArticle - 1) % 12) + 1 : `0${((hourArticle - 1) % 12) + 1}`}:${minuteArticle > 9 ? minuteArticle : `0${minuteArticle}`} pm`;
};

const getMonthName = (monthIndex: number): string => {
    let months = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ];
    return months[monthIndex];
};