# NailedIT-client

## Exercise description

**NailedIT** is small nail manufacturing company. This company do not yet use comprehensive IT solutions to store and visualize data about its clients, however, they were able to collect some data about them through their website. This data contains information such as: customers name, company, gender, email contact and address. Data also includes information about their purchase activity over last 12 months (data element - isActive) and their current balance with the company (data element - balance).

You were approached by Jim (account manager at NailedIT Company). Jim is responsible for relationship with existing customers. He needs to have overview of – who are the customers, how do they affect revenue (how many nails do they buy), what are their contact information.

He needs you to create simple web page (ideally one page without sub-pages or hyperlinks to other pages) – where he could see:

1. All the customers (all information)

1. Customers who has negative balance – so he can quickly call and ask them for the money

1. Total balance (sum of all balance fields for all customers)

1. All inactive users - so he can quickly call them and make them special discounted offer
(Jim always calculates discount as 10% of their balance, he always needs to put this into calculator and it drives him crazy, is there maybe any way to solve this problem for him? – if yes, think about the most convenient way to help Jim out with your web page!)

## Solution

This solution is build to make most convenient way for the user (Jim) to manage and maintain relationships with customers. In addition to minimal and clean design, additional functionality is provided in shape of voice messages. In the requirements user wants to `quickly call and ask them (customers) for the money` and `quickly call them and make them special discounted offer`. If the customers have certain status (IN DEBT or INACTIVE), an option for sending a voice message is presented in "Customer details" modal dialog.

## Setup

### Configuring the server-side application

Navigate to [https://github.com/PavleNeskovic/NailedIT-server](https://github.com/PavleNeskovic/NailedIT-server) and follow the instructions from that repository.

### Configuring the client-side application

1. Install the dependencies

    ```
    npm install
    ```

1. Run the application

    ```
    ng serve
    ```

1. Navigate to `http://localhost:4200/`.


