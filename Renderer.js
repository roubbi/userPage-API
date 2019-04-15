// Fill in the functions for your Renderer Class

class Renderer {
    _renderUsers(user) {
        $('.user-container').text("")
        var source = $('#user-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(user);
        $('.user-container').append(newHTML);

    }

    _renderFriends(friends) {
        $('.friends-container').text("")
        var source = $('#user-friends-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template({friends});
        $('.friends-container').append(newHTML);

    }

    _renderQuote(quoteData) {
        $('.quote-container').text("")
        var source = $('#quote-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(quoteData);
        $('.quote-container').append(newHTML);

    }

    _renderPokemon(pokemon) {

        $('.pokemon-container').text("")
        var source = $('#pokemon-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(pokemon);
        $('.pokemon-container').append(newHTML);

    }

    _renderMeat(meatData) {

        $('.meat-container').text("")
        var source = $('#meat-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(meatData);
        $('.meat-container').append(newHTML);

    }

    render(data) {
        //invokes all the individual _render methods
        this._renderQuote(data.quote),
        this._renderMeat(data.meat),
        this._renderPokemon(data.pokemon)
        this._renderUsers(data.user)
        this._renderFriends(data.friends)
    }
}

