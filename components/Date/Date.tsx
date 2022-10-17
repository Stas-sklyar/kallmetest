import { parseISO, format } from 'date-fns';
import { NextPage } from 'next';

interface Props {
    dateString: string
}

const Date: NextPage<Props> = ({ dateString }) => {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date