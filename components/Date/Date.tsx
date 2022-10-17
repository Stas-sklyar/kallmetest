import { parseISO, format } from 'date-fns';
import { NextPage } from 'next';

interface IDateProps {
    dateString: string
}

const Date: NextPage = ({ dateString }: IDateProps) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date