// SPDX-License-Identifier: MIT 
pragma solidity ^0.4.25;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox{
    string public message;

    function Inbox(string memory initMessage) public {
        message = initMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
