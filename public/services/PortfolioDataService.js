// public/services/PortfolioDataService.js

export class PortfolioDataService {

    constructor(
        repository,
        fallbackData
    ) {

        this.repository =
            repository;

        this.fallbackData =
            fallbackData;
    }


    async load() {

        try {

            const [
                profile,
                skills,
                services,
                projects,
                experience,
                education,
                certifications,
                contactMethods
            ] = await Promise.all([

                this.repository
                    .getProfile(),

                this.repository
                    .getSkills(),

                this.repository
                    .getServices(),

                this.repository
                    .getProjects(),

                this.repository
                    .getExperience(),

                this.repository
                    .getEducation(),

                this.repository
                    .getCertifications(),

                this.repository
                    .getContactMethods()

            ]);


            const portfolio =
                this.mapPortfolioData({
                    profile,
                    skills,
                    services,
                    projects,
                    experience,
                    education,
                    certifications,
                    contactMethods
                });


            console.log(
                "Portfolio loaded from Supabase."
            );


            return portfolio;

        }
        catch (error) {

            console.error(
                "Supabase failed. Using local fallback data.",
                error
            );


            return this.fallbackData;
        }

    }


    mapPortfolioData({
        profile,
        skills,
        services,
        projects,
        experience,
        education,
        certifications,
        contactMethods
    }) {

        return {

            profile:
                this.mapProfile(
                    profile,
                    contactMethods
                ),


            skills:
                skills.map(
                    (skill) =>
                        skill.name
                ),


            services:
                services.map(
                    (service) => ({
                        icon:
                            service.number,

                        title:
                            service.title,

                        description:
                            service.description,

                        tags:
                            service.tags ?? []
                    })
                ),


            projects:
                projects.map(
                    (project) => ({

                        initials:
                            project.initials,

                        title:
                            project.title,

                        category:
                            project.category,

                        audience:
                            project.audience,

                        gradient:
                            project.gradient,

                        description:
                            project.description,

                        contribution:
                            project.contribution,

                        result:
                            project.result,

                        technologies:
                            project.technologies
                            ?? []

                    })
                ),


            experience:
                experience.map(
                    (item) => ({

                        role:
                            item.role,

                        company:
                            item.company,

                        location:
                            item.location,

                        period:
                            item.period,

                        bullets:
                            item.bullets
                            ?? []

                    })
                ),


            education:
                this.mapEducation(
                    education
                ),


            certifications:
                certifications.map(
                    (certification) => ({

                        title:
                            certification.title,

                        organization:
                            certification.organization,

                        year:
                            certification.year

                    })
                ),


            contactMethods
        };
    }


    mapProfile(
        profile,
        contactMethods
    ) {

        if (!profile) {
            return this.fallbackData.profile;
        }


        const contactMap =
            Object.fromEntries(
                contactMethods.map(
                    (item) => [
                        item.type,
                        item
                    ]
                )
            );


        return {

            name:
                profile.name,

            title:
                profile.title,

            location:
                profile.location,

            experience:
                profile.experience_years,

            appsDelivered:
                profile.apps_delivered,

            platformUsers:
                profile.platform_users,

            email:
                contactMap.email?.value
                ?? profile.email,

            phoneDisplay:
                contactMap.phone?.value
                ?? profile.phone_display,

            phone:
                profile.phone,

            linkedin:
                contactMap.linkedin?.url
                ?? profile.linkedin
                ?? "",

            github:
                contactMap.github?.url
                ?? profile.github
                ?? "",

            summary:
                profile.summary
        };
    }


    mapEducation(
        education
    ) {

        const first =
            education[0];


        if (!first) {
            return this.fallbackData.education;
        }


        return {

            degree:
                first.degree,

            university:
                first.university,

            year:
                first.year

        };
    }

}