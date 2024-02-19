/**
 * Provides utilities to date.
 */
export const DateUtils = {
    /**
     * Format Date to string.
     */
    formatDateToString: (
        date: Date,
    ): string | null | undefined => {
        if (!date) {
            return date
        }

        return date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    },

    /**
     * Format Date to string interval.
     */
    formatDateToStringInterval: (
        startDate: Date,
        endDate: Date,
        locale: string
    ): string | null | undefined => {
        if (!startDate || !endDate) {
            return null
        }

        return `${startDate.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'short',
        })} - ${endDate.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'short',
        })}`
    }
}