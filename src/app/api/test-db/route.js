import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db('Portfolio');

    const projects = await db
      .collection('projects')
      .find({})
      .toArray();

    return Response.json({
      success: true,
      projects,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}