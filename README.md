# api-solid

Onegai Muscle app

## Requirements

### Functional Requirements (FRs)

- FR01: Must be possible to register;
- FR02: Must be possible to authenticate;
- FR03: Must be possible to obtain the profile of a logged user;
- FR04: Must be possible to obtain the number of check-ins performed by the logged user;
- FR05: Must be possible for the user to obtain its check-in history;
- FR06: Must be possible for the user to search nearby gyms;
- FR07: Must be possible for the user to search gyms by the name;
- FR08: Must be possible for the user to perform check-in at a gym;
- FR09: Must be possible to validate the check-in of an user;
- FR10: Must be possible to register a gym;

### Business Rules (BRs)

- BR01: The user must not be allowed to register with a duplicate email;
- BR02: The user must not be allowed to perform 2 (two) or more check-ins in the same day;
- BR03: The user must not be allowed to perform a check-in if it is not at leat 100 (hundred) meters away of a gym;
- BR04: The check-in can only be validated within 20 (twenty) minutes after its created;
- BR05: The check-in can only be validated by admins;
- BR06: The gym can only be registered by admins;

### Non-Functional Requirements (NFRs)

- NFR01: The password of the user must be encrypted;
- NFR02: The data of the application must be persisted in a PostgreSQL database;
- NFR03: All data lists must be paged with 20 (twenty) items per page;
- NFR04: The user must be identified by a JWT (Json Web Token)