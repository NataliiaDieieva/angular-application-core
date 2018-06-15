/**
 * User model
 * to prepare data before sending it on the view
 */
export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public company: string;
    public test: string;

    constructor ( data ) {
        this.id = data.id || 1;
        this.firstName = data.first_name || 'User';
        this.lastName = data.last_name || '';
        this.username = data.edc_username || '';
        this.email = data.email || '';
        this.company = data.company_name || '';
        this.company = data.company_name || '';
    }
}
