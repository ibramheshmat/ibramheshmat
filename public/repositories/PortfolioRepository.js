// public/repositories/PortfolioRepository.js

export class PortfolioRepository {

    constructor(client) {
        this.client = client;
    }


    async getProfile() {

        const { data, error } =
            await this.client
                .from("profile")
                .select("*")
                .eq("is_published", true)
                .limit(1)
                .maybeSingle();


        this.throwIfError(
            error,
            "profile"
        );


        return data;
    }


    async getSkills() {

        const { data, error } =
            await this.client
                .from("skills")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "skills"
        );


        return data ?? [];
    }


    async getServices() {

        const { data, error } =
            await this.client
                .from("services")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "services"
        );


        return data ?? [];
    }


    async getProjects() {

        const { data, error } =
            await this.client
                .from("projects")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "projects"
        );


        return data ?? [];
    }


    async getExperience() {

        const { data, error } =
            await this.client
                .from("experience")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "experience"
        );


        return data ?? [];
    }


    async getEducation() {

        const { data, error } =
            await this.client
                .from("education")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "education"
        );


        return data ?? [];
    }


    async getCertifications() {

        const { data, error } =
            await this.client
                .from("certifications")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "certifications"
        );


        return data ?? [];
    }


    async getContactMethods() {

        const { data, error } =
            await this.client
                .from("contact_methods")
                .select("*")
                .eq("is_published", true)
                .order(
                    "sort_order",
                    { ascending: true }
                );


        this.throwIfError(
            error,
            "contact_methods"
        );


        return data ?? [];
    }


    throwIfError(
        error,
        resourceName
    ) {

        if (!error) {
            return;
        }


        console.error(
            `Failed loading ${resourceName}:`,
            error
        );


        throw error;
    }

}