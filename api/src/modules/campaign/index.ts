import { Elysia, t } from "elysia";
import { prisma } from "~libs/prisma";
import { isAuthenticated } from "~middlewares/auth";

export const campaign = (app: Elysia) =>
    app
        .group("/campaign", (app) =>
            app
                .use(isAuthenticated)
                .post(
                    "/",
                    async ({ body, set, user }) => {
                        const { name, bloodType, phoneNumber, location, userId } = body;

                        // validando campanhas ativas para a mesma pessoa
                        const campaignExists = await prisma.campaign.findFirst({
                            where: {
                                name,
                                bloodType,
                                phoneNumber
                            },
                            select: {
                                id: true,
                            },
                        });
                        if (campaignExists) {
                            set.status = 400;
                            return {
                                success: false,
                                data: null,
                                message: "Existe uma campanha ativa para essa pessoa.",
                            };
                        }

                        const newCampaign = await prisma.campaign.create({
                            data: {
                                name,
                                bloodType,
                                phoneNumber,
                                location,
                                expirationDate: new Date(),
                                userId
                            },
                            select: {
                                name: true,
                                bloodType: true,
                                phoneNumber: true,
                                location: true,
                                expirationDate: true,
                                userId: true
                            }
                        });

                        return {
                            success: true,
                            message: "Campanha iniciada com sucesso!",
                            data: {
                                campaign: newCampaign,
                            },
                        };
                    },
                    {
                        body: t.Object({
                            name: t.String(),
                            bloodType: t.String(),
                            phoneNumber: t.String(),
                            location: t.String(),
                            userId: t.String()
                        }),
                    }
                )
                .get(
                    "/",
                    async ({ body, set }) => {

                    },
                    {
                        body: t.Object({
                            username: t.String(),
                            password: t.String(),
                        }),
                    }
                )
        );
