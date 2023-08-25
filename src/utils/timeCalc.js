// Calculate hours
export default function calculateHour(start, end) {
    // Change to 24hr format

    const startSplit = start.split(' ');
    const endSplit = end.split(' ');

    const startTime = startSplit[0].split(":");
    const endTime = endSplit[0].split(":");

    let startHour = Number(startTime[0]);
    const startMin = Number(startTime[1]);
    let endHour = Number(endTime[0]);
    const endMin = Number(endTime[1]);

    if (startHour === 12) {
        startHour -= 12;
    }
    if (endHour === 12) {
        endHour -= 12;
    }

    let output;

    // If start/end have same AM or PM 
    if (startSplit[1] === endSplit[1]) {

        // If start hour < end hour
        if (endHour >= startHour) {
            let hour = endHour - startHour;
            let min = endMin - startMin;

            if (min < 0) {
                hour--
                min += 60
            }
            output = hour + (min / 60);
            return output;
        }

        if (endHour < startHour) {
            let hour = endHour - startHour + 24;
            let min = endMin - startMin;

            if (min < 0) {
                hour--
                min += 60
            }
            output = hour + (min / 60);
            return output;
        }
    } else {
        endHour += 12;

        let hour = endHour - startHour;
        let min = endMin - startMin;

        if (min < 0) {
            hour--
            min += 60
        }
        output = hour + (min / 60);
        return output;
    }
}