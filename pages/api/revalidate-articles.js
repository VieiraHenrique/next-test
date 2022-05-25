export default async function handler(req, res) {
    try {
        await res.unstable_revalidate(`/articles/${req.body.entry.id}`);
        await res.unstable_revalidate(`/`);
        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).send("Error revalidating");
    }
}
