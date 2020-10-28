import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { LOAD_ORGANIZATIONS_SUCCESS } from "../../redux/actions/actionTypes";

const SiteForm = ({
    site,
    organizations,
    onSave,
    onChange,
    saving = false,
    errors = {}
}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{site.id ? "Edit" : "Add"} Site</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                url="url"
                label="site url"
                value={site.url}
                onChange={onChange}
                errors={errors.title}
            />
            <SelectInput
                organization="organization_id"
                label="Organization"
                value={site.organization_id || ""}
                defaultOption="Select Organization"
                options={organizations.map(organization => ({
                    value: organization.organization_id,
                    text: organization.organization
                }))}
                onChange={onChange}
                error={errors.organization}
            />

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>)
}

SiteForm.propTypes = {
    organizations: PropTypes.array.isRequired,
    site: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};