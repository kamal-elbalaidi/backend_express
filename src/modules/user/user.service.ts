import prisma from "../../core/config/prisma.config";



export async function get_users_service() {
  return await prisma.user.findMany({});
}
