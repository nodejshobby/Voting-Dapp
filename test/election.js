const Election  = artifacts.require("./Election.sol");

contract("Election", function(accounts){
    var electionInstance;

    it("Initializes with two candidates", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance
            return electionInstance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        })
    })

    it("Initializes candidates with correct values", function(){
        return Election.deployed().then(function(instance){
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate.id, 1, "contains correct id");
            assert.equal(candidate.name, "Buhari", "contains correct name");
            assert.equal(candidate.voteCount, 0, "contains correct default vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate.id, 2, "contains correct id");
            assert.equal(candidate.name, "Tinubu", "contains correct name");
            assert.equal(candidate.voteCount, 0, "contains correct default vote count");
        })
    })
})