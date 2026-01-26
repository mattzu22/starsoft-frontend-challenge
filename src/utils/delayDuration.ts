export default async function delayDuration<T>(asyncFn: () => Promise<T>)
: Promise<{ duration: number }> {
    const dateNow = Date.now();

    await asyncFn();

    const duration = (Date.now() - dateNow) / 1000;

    return { duration };
}